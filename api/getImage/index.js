// import fetch from 'node-fetch';
var callRes;
module.exports = async function (context, req) {
    var callRes = "https:\/\/images.dog.ceo\/breeds\/tervuren\/shadow_and_frisbee.jpg"
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then(res => res.json())
    // .then(result => {
    //     console.log(result)
    //     callRes = result.message
    // })
    // .catch(err=>console.log(err))
    context.res.json({
        text: callRes
    })
    context.done()
};