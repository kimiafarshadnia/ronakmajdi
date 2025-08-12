import Image from "next/image";

const items = [
  { id: 1, type: "image", src: "https://picsum.photos/300/200?random=1" },
  { id: 2, type: "text", content: "This is a text item with variable width." },
  { id: 3, type: "image", src: "https://picsum.photos/400/200?random=2" },
  { id: 4, type: "text", content: "Another text item, shorter width." },
  { id: 5, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 6, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 7, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 8, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 9, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 10, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 11, type: "image", src: "https://picsum.photos/350/200?random=3" },
  { id: 12, type: "image", src: "https://picsum.photos/350/200?random=3" },
];

export const SomeProduct = () => {
  return (
    <div className="container mx-auto px-4">
      <div
        className="grid gap-4 grid-flow-row-dense"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, max-content))",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="h-[250px] flex items-center justify-center border rounded-md bg-gray-100 overflow-hidden"
            style={{
              width: item.type === "text" ? "auto" : undefined,
              maxWidth: "100%",
              padding: item.type === "text" ? "0 10px" : undefined,
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`item-${item.id}`}
                className="h-full object-cover"
                style={{ width: "auto", maxWidth: "100%" }}
              />
            ) : (
              <p className="text-center">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
