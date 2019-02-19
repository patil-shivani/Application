const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "we are fetch your order"
    });
});

router.post('/', (req, res, next) => {
    const order ={
        customername:req.body.customername,
        orderno:req.body.orderno
    }
    res.status(200).json({
        message: "order is created",
        Order:order
    });
});

router.get('/:orderid', (req, res, next) => {
    const id = req.params.orderid;
    if (id === "text") {
        res.status(201).json({
            message: "fetch order details",
        });
    } else {
        res.status(200).json({
            message: "pass an orderid"

        });
    }
});


router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: " order is updated "
    });
});


module.exports = router;

