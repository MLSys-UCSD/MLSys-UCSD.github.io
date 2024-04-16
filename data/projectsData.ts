interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'DistServe: Prefill-decode Disaggregation for LLM Serving Optimization',
    description: `DistServe is goodput-optmized LLM serving system that supports prefill-decode disaggregation, a.k.a. splitting prefill from decode into different GPUs, to account for both cost and user satisfaction. DistServe achieves up to 4.48x goodput or 10.2x tighter SLO compared to exiting state-of-the-art serving systems, while staying within tight latency constraints.`,
    imgSrc: '/static/images/projects/distserve_anime-crop.gif',
    href: 'https://hao-ai-lab.github.io/blogs/distserve',
  }
]

export default projectsData
