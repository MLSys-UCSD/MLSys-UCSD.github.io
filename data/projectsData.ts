interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Efficient LLM Scheduling by Learning to Rank',
    description: `Traditional Large Language Model (LLM) serving systems use first-come-first-serve (FCFS) scheduling, leading to delays when longer requests block shorter ones. The unpredictability of LLM workloads and output lengths further complicates scheduling. We introduced a learning-to-rank method to predict output length rankings, enabling a Shortest Job First-like policy and reducing chatbot latency by 6.9x under high load compared to FCFS.`,
    imgSrc: '/static/images/projects/llm-ltr-cover.jpg',
    href: 'https://hao-ai-lab.github.io/blogs/vllm-ltr',
  },
  {
    title: "Can Scheduling Overhead Dominate LLM Inference Performance? A Study of CPU Scheduling Overhead on Two Popular LLM Inference Systems",
    description: "CPU scheduling overhead can dominate LLM inference time—up to 50% in systems like vLLM! Scheduling overhead can no longer be ignored as model forwarding speeds increase and more scheduling tasks get added.",
    imgSrc: '/static/images/projects/iterative_scheduling_gif.gif',
    href: "https://mlsys.wuklab.io/posts/scheduling_overhead/",
    },
  {
    title: 'MuxServe: Flexible Spatial-Temporal Multiplexing for Multiple LLM Serving',
    description: `MuxServe is a serving system using flexible spatial-temporal multiplexing, leverages dynamic LLM popularity and unbalanced resource utilization to achieve high GPU utilization and reduce serving costs, outperforming baselines by 1.8x in throughput and 2.9x in SLO attainment on synthetic workloads.`,
    imgSrc: '/static/images/projects/muxserve_cover.gif',
    href: 'https://hao-ai-lab.github.io/blogs/muxserve/',
  },
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
