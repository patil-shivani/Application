const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling get request  to /product"
    });
});

router.post('/', (req, res, next) => {
    const product ={
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json({
        message: "Handling Post request  to /product",
        Product:product
    });
});

    router.get('/:Id', (req, res, next) => {
        const id = req.params.Id;
        if (id === 'special') {
            res.status(200).json({
                message: "You discovered a special id",
                id: id
            });
        }else {
            res.status(200).json({
                message: "Please pass an Id"
            });
        }
    });
    router.patch('/:productId', (req, res, next) => {
        res.status(200).json({
            message: " your Id is updated "
        });
    });


    router.delete('/:productId', (req, res, next) => {
        res.status(200).json({
            message: " deleted Product"
        });
    });



module.exports = router;