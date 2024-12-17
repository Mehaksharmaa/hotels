const express= require ('express');
const router = express.Router();
const Person = require('../person');

router.post('/', async (req, res)=>{
    try{
  
        //  here we are assuming that the request body conatins the person data
          const data = req.body;
  
          // create a new person document using mongoose model'
          const newPerson = new Person(data);
  
          // save the new person to the database
         const response= await newPerson.save();
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
         const data = await Person.find();
  
         console.log('data fetched');
         res.status(200).json(data);
  
  
    }
  
    catch(err){
      console.log(err);
      res.status(500).json({error: 'internal server error'});
  
    }
  });


  router.get('/:workType', async(req, res)=>{


 
    try{
     const workType= req.params.workType;
     if(workType == 'chef'|| workType== 'manager'|| workType== 'waiter'){
         const response = await Person.find({work:workType});
         console.log('respnose fetched');
         res.status(200).json(response);

    }

    else{
           res.status(404).json({error: 'invalid work type'});
    }
   }
    catch(err){
     console.log(err);
     res.status(500).json({error: 'internal server error'});

    }



});


router.put('/:id',async (req, res)=>{

    try{
        const personID = req.params.id;
        const updatedPersonData= req.body;
        const response = await Person.findByIdAndUpdate(personID, updatedPersonData,{
            // this new will return the updated the value
            
            new:true,
            // this below funciton will check that whether that the person, criteria, like nam, work type, etc we have defined are used or not
            runValidators:true,
        })
         if(!response){
            return res.status(404).json({error:'Person not found'});
         }

        console.log('data updated');
        res.status(200).json(response);
    } 
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }

})
router.delete('/:id', async (req, res)=>{



    try{
        const personID = req.params.id;
        const response= await Person.findByIdAndDelete(personID);
        if(!response){
            return res.status(404).json({error:'Person not found'});
         }
         console.log('data deleted');
         res.status(200).json({message:'person deleted successfully'});
          
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});


    }
})

  module.exports=router;