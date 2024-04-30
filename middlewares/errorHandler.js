const errorHandler = (error,req,res,next) => {
    console.log(`[Error]:: ${error}`)
    res.status(500).json({
        message: "Internal Server Error"
    })
}

module.exports = errorHandler
