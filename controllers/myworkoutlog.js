const WorkoutLog = require('../models/WorkoutLog')



module.exports = {
    getMyWorkoutLog: async (req,res)=>{


           try{
            const logItems = await WorkoutLog.find({userId:req.user.id}).sort({ createdAt: "desc" }).lean();
            console.log("below are the workout log items being returned from MongoDB")
            console.log(logItems)
            res.render('myworkoutlog.ejs', {logItems: logItems, user: req.user})
        }catch(err){
            console.log(err)
        }



    },

    postMyWorkoutLog: async (req, res)=>{

        console.log("below are items being submitted on the workout form")
        console.log(req.body)



        try{

            

                await WorkoutLog.create({

                    workoutMuscle: req.body.workoutmuscle,
                    workoutExercise: req.body.exercisename,
                    weight: req.body.weight,
                    reps: req.body.rep,
                    sets: req.body.set,
                    userId: req.user.id,
                    
            
                })

            


        console.log('A new workout has been logged!')
        res.redirect('/myworkoutlog')

    }catch(err){
        console.log(err)
    }
},


deleteMyWorkoutLog: async (req,res)=>{
    
     try{
        await WorkoutLog.findOneAndDelete({_id:req.params.id})
        console.log("workoutlog deleted!")
        res.redirect('/myworkoutlog')

    }catch(err){
        console.log(err)
    }


}


}

