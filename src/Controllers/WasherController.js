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
        const washers = await prisma.washer.findMany({
            include:{
                works:true,
                works2:true
            }
        })
        res.json(washers)
    },
    async findOne(req,res){
        const id = Number(req.params.id)
        const unique = await prisma.washer.findUnique({
            where:{
                id:id
            }
        })
        res.json(unique)
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
    },
    async withdraw(req,res){
        const id = Number(req.params.id)
        const {value} = req.body

        const washer = await prisma.washer.update({
            where:{
                id:id
            },
            data:{
                balance:{
                    decrement:Number(value)
                }
            }
        })
        res.json(washer)
    },
    async balance(req,res){
        const sum  = await prisma.work.groupBy({
            by:['washerId'],
            _sum:{
                value:true
            }
        })
        res.json(sum)
    }
}