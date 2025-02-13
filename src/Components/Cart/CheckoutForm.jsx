export default function CheckoutForm({ formik, setshowForm }) {
    return (
      <>
        <div onClick={() => setshowForm(false)} className="fixed inset-0 bg-black/40 flex justify-center items-center"></div>
        <form
          className="bg-white rounded-lg p-4 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="mb-3">Shipping Address Form</h2>
          <div className="flex flex-col gap-4">
            <input {...formik.getFieldProps("city")} type="text" placeholder="city" className="rounded-lg outline-none border-gray-300" />
            <input {...formik.getFieldProps("phone")} type="tel" placeholder="phone" className="rounded-lg outline-none border-gray-300" />
            <input {...formik.getFieldProps("details")} type="text" placeholder="details" className="rounded-lg outline-none border-gray-300" />
  
            <button type="submit" className="px-3 py-2 rounded-lg bg-green-400">Check Out </button>
            <button onClick={() => setshowForm(false)} type="button" className="px-3 py-2 rounded-lg bg-red-700 border-2 border-gray-300">Cancel</button>
          </div>
        </form>
      </>
    );
  }
  