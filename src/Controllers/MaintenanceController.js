const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient

module.exports = {
    async store(req, res){
        const {value, description, expenses} =req.body

        const maintenance = await prisma.maintenance.create({

            data:{
                value:value,
                description:description,
                expenses:expenses
            }
        })
        if (expenses === true){
            const admin = await prisma.admin.update({
                where:{
                    id:1
                },
                data:{
                    balance:{
                        decrement:value
                    }
                }
            })
            console.log(admin)
            
        }else if (expenses === false){
            const admin = await prisma.admin.update({
                where:{
                    id:1
                },
                data:{
                    balance:{
                        increment: value
                    }
                }
            })
            console.log(admin)
            
        }
        res.json(maintenance)
    },
    async index(req, res){
        const maintenances = await prisma.maintenance.findMany()
        res.json(maintenances)
    },
    async change(req,res){
        const id = Number(req.params.id)
        const {value, description, expenses} = req.body

        const maintenance = await prisma.maintenance.update({
            where:{
                id:id
            },
            data:{
                value:value,
                description:description,
                expenses:expenses
            }

        })
        res.json(maintenance)
    },
    async delete(req,res){
        const id = Number(req.params.id)
        const maintenance = await  prisma.maintenance.delete({
            where:{
                id:id
            }
        })
        res.json(maintenance)
    }
}