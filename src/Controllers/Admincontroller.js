const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient

module.exports = {
    async store(req,res) {
        const {balance} = req.body
        
        const admins = await prisma.admin.create({
            data:{
                balance:balance,
            }
        })
        console.log(admins)
        
        res.json(admins)
    },
    async index (req,res){
        
        const balance = await prisma.admin.findMany()
        res.json(balance)
    },
    async balance (req,res){
        const sum = await prisma.work.groupBy({
            by:['paid'],
            _sum:{
                value: true
            }
        })
        res.json(sum)
    },
    async change(req,res){
        const id = req.params.id
        const {balance} = req.body
        const admin = await prisma.admin.update({
            where:{
                id:id
            },
            data:{
                balance:balance
            }
        })
        res.json(admin)
    }
}