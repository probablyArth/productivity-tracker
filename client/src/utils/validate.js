export default function isValid(goal, unit, twt, ln, targets) {
    
    for (let i in targets) {
        if (!i) {
            return false
        }
    }

    if (!(goal && unit && twt && ln)) {
        return false
    } 
    return true

}