const Product = require('../models/product.model.js');
const color = require('colors');

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
        console.log("Product created successfully".blue);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/*const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};*/

const deleteProductById = async (req, res) => {
    try {
        // Get the product name from the request body
        const { name } = req.body;

        // Find and delete the product by name
        const result = await Product.deleteOne({ name });

        // Check if any document was deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const topFive = async(req,res)=>{
    try{
        const topfive = await Product.find({}).sort({price:-1}).limit(5)
        res.status(200).json(topfive)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

/*const getProductByName = async(req, res) => {
    try {
        const { name } = req.query;
        const product = await Product.findOne({ name: { $eq: name } });
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};*/
const calSum = async(req,res)=>{
    const total = await Product.aggregate([
         { $match: { available: true } },
        {$group:{
            _id:null,
            average:{$avg:'$price'}
        }
    }

    ])
    return res.status(200).json(total)
}


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    topFive,
    calSum
    //getProductByName
};
