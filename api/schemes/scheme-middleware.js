/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/

const db = require("../../data/db-config")

function checkSchemeId() {
  return async (req, res, next)=>{
    try{
      const {id} = req.params.id
      const user = db("schemes").select("*").where("scheme_id", id)

      if (!user){
        return res.status(404).json({
          message: `scheme with scheme_id ${id} not found`
        })
      }

      req.user = user
      next()
    } catch(err){
      next(err)
    }
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
