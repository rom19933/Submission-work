//כאן אנו מסדרים את הפונקציות לטובת הנוחות 
//כמו חדר בקרה, כאן פיזית נמצאת הפונקציה שבמידת הצורך נשחק בה 
module.exports = {
    signup: (req, res) => {
        res.status(200).json({
            message: 'Signup'
        })
    },
    login: (req, res) =>{
        res.status(200).json({
            message: 'Login'
        })
    }
}