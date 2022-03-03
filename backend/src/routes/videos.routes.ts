import { Router } from 'express'
import * as videoCtrol from './videos.controller'

const router = Router();

router.get('/videos', videoCtrol.getVideos);

router.get('/videos/:id',videoCtrol.getVideo);

router.post('/videos', videoCtrol.createVideo);

router.delete('/videos/:id', videoCtrol.deleteVideo);

router.put('/videos/:id', videoCtrol.updateVideo)

export default router