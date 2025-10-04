export function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}