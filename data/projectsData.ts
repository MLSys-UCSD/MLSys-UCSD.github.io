interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Preble: Efficient Prompt Scheduling for Augmented Large Language Models',
    description: `LLM prompts are getting longer and increasingly shared with agents, tools, documents, etc. We introduce Preble, the first distributed LLM serving system targeting long and shared prompts. Preble reduces latency by 1.5-14.5x over SOTA serving systems.`,
    imgSrc: '/static/images/projects/preble_mlsys_gif.gif',
    href: 'https://mlsys.wuklab.io/posts/preble/',
  },
  {
    title: 'Efficient Augmented LLM Serving With InferCept',
    description: `Today, LLMs are constantly being augmented with tools, agents, models, RAG, etc. We built InferCept [ICML'24], the first serving framework designed for augmented LLMs. InferCept sustains a 1.6x-2x higher serving load than SOTA LLM serving systems. `,
    imgSrc: '/static/images/projects/infercept_mlsys_gif.gif',
    href: 'https://mlsys.wuklab.io/posts/infercept/'
  },
  {
    title: 'Consistency Large Language Models: A Family of Efficient Parallel Decoders',
    description: `Large language models (LLMs) have traditionally decoded tokens sequentially, our research introduces Consistency Large Language Models (CLLMs), which can be fine-tuned to efficiently decode entire token sequences in a single step, reducing inference latency by up to 3.5x.`,
    imgSrc: `/static/images/projects/cllm_objective_gif.gif`,
    href: `https://hao-ai-lab.github.io/blogs/cllm/`
  },
  {
    title: 'DistServe: Prefill-decode Disaggregation for LLM Serving Optimization',
    description: `DistServe is goodput-optmized LLM serving system that supports prefill-decode disaggregation, a.k.a. splitting prefill from decode into different GPUs, to account for both cost and user satisfaction. DistServe achieves up to 4.48x goodput or 10.2x tighter SLO compared to exiting state-of-the-art serving systems, while staying within tight latency constraints.`,
    imgSrc: '/static/images/projects/distserve_anime-crop.gif',
    href: 'https://hao-ai-lab.github.io/blogs/distserve',
  }
]

export default projectsData
