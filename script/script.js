//
        {/* // // console.log("Hello to my world");

        // //sctring concatenation character all enclosed in a quotation mark

        // //operation that be done on string
        // console.log("hello to world has" + " "+  "Hello World".length + " " + "characters")
        // name = "Kachi"

        // gender = "male"
        // age = 20

        // // if(gender=="female"){ */}
       {/* ?
        // //     console.log("female teenage class")
        // // }
        // // else console.log("Children Only")
        // // switch
        // switch (gender) { */}
        {/* //     case "male": console.log("He is a boy");
        //     break;
        //     case "female": console.log("she is a female");
        //     break;

        //     default: console.log("enter your gender");
        //     break;
        // } --> */}

        count = 0
        setInterval(() => {
            count ++
            console.log(count)
        }, 5000)

        let myName;
        setTimeout(() => {
            myName = "timer function"
            console.log (myName)
        }, 2000)

        let p = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve("Holuphunmmy")
            }, 2000);
        })

        myName =Holuphunmmy.then(value=> {return value}).catch(err=>console.log(err))
        console.log(myName)

        testFunction = async ()=>{
            myName = await p
            console.log(myName);
        }
        testFunction()

        const greeting = async ()=>{
            try{
                page[0].textContent = "...loading"
                page[0].style="text-align:center"
                yourName = await newName
                
            }
        }