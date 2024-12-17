const express = require('express');
const router = express.Router();
const Item = require('../menu');
router.post('/', async(req, res)=>{
    try{
       const data = req.body;
       const newItem = new Item(data);
       const response = await newItem.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
    }
  });

router.get('/', async(req, res)=>{
    try{
          const data = await Item.find();
          console.log('data fetched');
          res.status(200).json(data);


    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
    }
});

router.put('/:id', async(req, res)=>{
    try{
           const ItemId= req.params.id;
           const UpdatedItemId = req.body;
           const response = await Item.findByIdAndUpdate(ItemId, UpdatedItemId,{
            new:true,
            runValidators:true,
           })
           if(!response){
            return res.status(404).json({error:'Item not found'});
         }

         console.log('data updated');
         res.status(200).json(response);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Item nor found'});
    }
});


router.delete('/:id', async (req, res)=>{
    try{
        const ItemId= req.params.id;
        const response= await Item.findByIdAndDelete(ItemId);
        if(!response){
            return res.status(404).json({error:'Item not found'});
         }
         console.log('data deleted');
         res.status(200).json({message:'Item deleted successfully'});
          
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
})
// adding comment for testing purpose
module.exports = router;
