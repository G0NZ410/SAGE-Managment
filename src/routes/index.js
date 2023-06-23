import { Router } from "express"

const router = Router()

router.get('/', (req, res) => res.render('index', {title: "Segun es el inicio", x: 30}))

router.get('/about', (req, res) => res.render('about', {titulo: "Segun es el inicio"}))

router.get('/contact', (req, res) => res.render('contact', {lodelinicio: "Segun es el inicio"}))

export default router;

