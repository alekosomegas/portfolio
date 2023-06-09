import React from "react"

const Work = React.forwardRef(function Work(props, ref) {
    return (
        <section ref={(el) => ref.current[2] = el} id="work" className="bg-mainHighlight h-screen snap-end">

        </section>
    )
})

export default Work;