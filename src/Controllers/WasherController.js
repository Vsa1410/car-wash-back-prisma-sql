const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient

module.exports = {
    async store(req,res){
        const {name, balance} = req.body

        const washer = await prisma.washer.create({
            data:{
                name:name,
                balance:balance,

            }
        })
        res.json(washer)
    },
    async index(req,res){
        const washers = await prisma.washer.findMany()
        res.json(washers)
    },
    async change(req,res){
        const id =  Number(req.params.id)
        const {name, balance} = req.body

        const washer = await prisma.washer.update({
            where:{
                id:id
            },
            data:{
                name:name,
                balance:balance,
            }
        })
        res.json(washer)


    },
    async delete(req,res){
        const id  = Number(req.params.id)
        const washer = await prisma.washer.delete({
            where:{
                id:id
            }
        })
        res.json(washer + "Deletado com sucesso")
    }
}