const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient

module.exports={
    async store(req, res){
        const {date, client, value, washerIdOne, washerIdTwo, paid } = req.body

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
            }
        })
        
        res.json(works)
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
        res.json(car)
    },
    async delete(req, res){
        const id = Number(req.params.id)
        const work = await prisma.work.delete({
            where:{
                id:id
            }
        })
        console.log("Deletado com sucesso")
        res.json(work)
    }
}