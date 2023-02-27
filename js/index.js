import {Router} from './rauter.js'

const router = new Router()
router.add("/", "/pages/Home.html")
router.add("/Universo", "/pages/Universo.html",)
router.add("/Exploracao", "/pages/Exploração.html",)
router.add( 404 , "/pages/error.html",)
    
    
    router.handle()
    
    window.onpopstate = () => router.handle()
    window.route = () => router.route()