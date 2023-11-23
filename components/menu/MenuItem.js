export default function MenuItem() {
    return (
      <div className="bg-gray-200 p-4 rounded-lg text-center shadow-lg transition-all hover:bg-white hover:shadow-primary">
        <img src="/pepperoni.png" alt="pizza" />
        <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
          placerat velit, vitae auctor neque. Quisque nec ex.
        </p>
        <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
          Add to cart $12
        </button>
      </div>
    );
}