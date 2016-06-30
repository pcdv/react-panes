export function filterViews(views, type) {
    const res = []
    for (var title in views) {
        const v = views[title]
        if (v.position.startsWith(type))
            res.push(v)
    }
    return res
}

export function getActiveView(views, type) {
    for (var title in views) {
        var v = views[title]
        if (v.position.startsWith(type) && v.active)
            return v
    }
}