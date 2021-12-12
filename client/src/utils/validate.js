export default function isValid(goal, targets) {
    
    for (let i in targets) {
        if (!i) {
            return false
        }
    }

    if (!(goal && targets)) {
        return false
    } 
    return true

}