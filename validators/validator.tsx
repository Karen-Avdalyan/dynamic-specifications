import * as Z from 'zod';

const carValidator = Z.object({
    name:Z.string().min(3),
    exterior: Z.object({
        color: Z.string().min(2),
        typeOfPaint:Z.string().min(3),
        wheelSize: Z.number().positive()
    }),
    interier: Z.object({
        material:Z.string().min(3)
    })
})