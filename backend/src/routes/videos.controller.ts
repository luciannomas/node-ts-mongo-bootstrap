import { RequestHandler } from 'express'
import Video from './Video'

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    if(videoFound)
        return res.status(301).json({message: 'the URL already exists'})
    
    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo);
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    const VideoFound = await Video.findById(req.params.id)
    console.log(req.params.id)
    if (!VideoFound) return res.status(204).json();
    return res.json(VideoFound)
}

export const deleteVideo: RequestHandler = async (req, res) => {
    const VideoFound = await Video.findByIdAndDelete(req.params.id)
    console.log(req.params.id)
    if (!VideoFound) return res.status(204).json();
    return res.json(VideoFound)
}

export const updateVideo: RequestHandler = async (req, res) => {
    const VideoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true }) // { new: true} para que muestre el dato ya actualizado 
    if (!VideoUpdate) return res.status(204).json()
    res.json(VideoUpdate)
}
