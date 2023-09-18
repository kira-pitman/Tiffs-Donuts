const clientError = (res, message) => res.status(400).json({message})

const notFoundError = (res, message) => res.status(404).json({message})

const unauthorizedError = (res, message) => {
    console.log(res)
    return res.status(401).json({message})
}

export default {clientError, notFoundError, unauthorizedError}