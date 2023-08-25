
export const getRandomActivity = () => {
    return fetch("http://www.boredapi.com/api/activity/")
}

export const getActivityByType = (type) => {
    return fetch(`http://www.boredapi.com/api/activity?type=${type}`)
}