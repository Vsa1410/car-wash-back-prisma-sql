const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient

module.exports={
    async store(req, res){
        const {date, client, value, washerIdOne, washerIdTwo, paid } = req.body
        
        if (washerIdOne && !washerIdTwo){
            var washerPayment = value * 0.8
            const payment = await prisma.washer.update({
                where:{
                    id:Number(washerIdOne)
                },
                data:{
                    balance:{
                        increment:washerPayment
                    }
                }
            })
            console.log(payment)
            console.log(single)
        }
        

        if(washerIdOne && washerIdTwo) {
            var washerPayment =  (value / 2) * 0.8
            console.log(washerPayment)
            const payment = await prisma.washer.updateMany({
                where:{
                id:{in:[washerIdOne,washerIdTwo]}    
                },
                data:{
                    balance:{
                        increment:washerPayment,
                    },
                    balance:{
                        increment:washerPayment,
                    }
                }
            })
            console.log(payment)
            

        }

        const work = await prisma.work.create({
            data:{
                date:date,
                client:client,
                value:value,
                washerId:washerIdOne,
                secondWasherId:washerIdTwo,
                paid:paid
            }
        })
        res.json(work)
    },
    async index(req, res){
        const works = await prisma.work.findMany({
            include:{
                washerName: true,
                secondWasher:true
            },
            orderBy: {
                date:'desc'
            }
        })
        
        res.json(works)
    },
    async findOne(req,res){
        const id = Number(req.params.id)
        const unique = await prisma.work.findUnique({
            where:{
                id:id
            }
        })
        res.json(unique)
    },
    async change(req,res){
        const id = Number(req.params.id);
        const {date, client, value, washerIdOne, washerIdTwo, paid } = req.body
        const work = await prisma.work.update({
            where:{
                id:id
            },
            data:{
                date:date,
                client:client,
                value:value,
                washerId:washerIdOne,
                secondWasherId:washerIdTwo,
                paid:paid
            }
        })
        res.json(work)
    },
    async delete(req, res){
        const id = Number(req.params.id)

        const washerValueId = await prisma.work.findUnique({
            where:{
                id:id
            }
        })
        console.log(washerValueId.value)

        if(washerValueId.washerId && !washerValueId.secondWasherId){
            var payment =  washerValueId.value * 0.8
            const deleteValue = await prisma.washer.update({
                where:{
                    
                    id:washerValueId.washerId
                },
                data:{
                    balance:{
                        decrement: payment
                    },
                    
                } 
            }) 
            console.log(deleteValue)
        }

        if (washerValueId.washerId && washerValueId.secondWasherId){

            var payment = (washerValueId.value / 2) * 0.8
            const deleteValue = await prisma.washer.updateMany({
                where:{
                    
                    id: {in: [washerValueId.washerId, washerValueId.secondWasherId]}
                },
                data:{
                    balance:{
                        decrement: payment
                    },
                    balance:{
                        decrement:payment
                    }
                } 
            }) 
            console.log(deleteValue)
        }

        


        const work = await prisma.work.delete({
            where:{
                id:id
            }
        })
        console.log("Deletado com sucesso")
        res.json(work)
    }
}