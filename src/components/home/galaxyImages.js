const thumbnails = import.meta.glob(
  "@/assets/galaxy/thumbnails/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
)

const originals = import.meta.glob(
  "@/assets/galaxy/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
)

export const galaxyImages = Object.entries(thumbnails)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/(\d+)\.webp$/)?.[1])
    const numB = Number(b.match(/(\d+)\.webp$/)?.[1])
    return numA - numB
  })
  .map(([path, thumbnail]) => {
    const number = path.match(/(\d+)\.webp$/)?.[1]

    const originalPath = Object.keys(originals).find(
      (original) => original.endsWith(`/${number}.webp`)
    )

    return {
      id: `item${number}`,
      thumbnail,
      src: originals[originalPath],
      alt: "",
    }
  })