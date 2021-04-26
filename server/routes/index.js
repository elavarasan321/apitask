import express from "express";
const router = express.Router();
import Items from "../models/items";

/* GET home page. */
router.get('/items', (req, res, next) =>{
    Items.find()
    .then(result=>{
      res.status(200).json({
        userdata:result
      });
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    }); 

});


router.post('/items', function(req, res, next) {
  let item = new Items({
    id:req.body.id,
    itemname:req.body.itemname,
    price:req.body.price,
    description:req.body.description    
  });

  try{
    item =  item.save();
    //redirect for particulr data
    res.send("created success");
  }catch(err){
    console.log(err);
  }

});

router.get('/items/:id', (req, res, next) =>{
  Items.findOne({id:req.params.id})
  .then(result=>{
    res.status(200).json({
      userdata:result
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  }); 

});

router.patch('/items/:id', (req, res, next) =>{
  console.log(req.params.id)

  Items.findOneAndUpdate({id:req.params.id},{$set: { itemname: req.body.itemname }})
  .then(result=>{
    res.status(200).json({
      userdata:"updated"
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  }); 

});
router.delete('/items/:id', (req, res, next) =>{
  console.log(req.params.id)

  Items.findOneAndDelete({id:req.params.id})
  .then(result=>{
    res.status(200).json({
      res
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  }); 

});



module.exports = router;
