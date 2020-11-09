exports.payWithStripe = async (req, res) => {
    const paymentMethodId = req.body.paymentMethodId;
    const email = req.body.email;
    const name = req.body.name;
    const parsedPlan = JSON.parse(req.body.plan);

    if (paymentMethodId && email && name) {
        const customerInfo = {
            name: name,
            email: email,
            planId: parsedPlan.id,
          };
          const subscription = await createCustomerAndSubscription.createCustomerAndSubscription(
            req.body.paymentMethodId,
            customerInfo,
          );
        
          return res.json({ subscription });
        
    } else {
        return res.send(400).json('Please provide complete data');
    }
   
}

async function createCustomerAndSubscription(paymentMethodId, customerInfo) {
    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email: customerInfo.email,
      name: customerInfo.name,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{
      plan: customerInfo.planId,
    }],
    expand: ["latest_invoice.payment_intent"],
  });

  return subscription;
}
