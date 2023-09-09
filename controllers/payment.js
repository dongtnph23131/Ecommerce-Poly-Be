const stripe = require('stripe')('sk_test_51NhcV4BTIfNMcVjX5JYvASpuCub24bYVFGZfPjTdVLD6sEGzvRue461MVcyKqwg8oksMxqUra2bJeOsfoCVZCafs00rTnmcGen')
exports.checkoutCart = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: req.body.lineItems,
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: 'https://localhost:3000',
            cancel_url: 'https://localhost:3000'
        })
        return res.status(201).json(session)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}