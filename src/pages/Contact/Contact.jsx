const Contact = () => {
    return (
        <>
        <div>
            <section className="mt-8 p-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-blue-600">Contact Us</h2>
            <p className="mt-4 leading-relaxed">
                At <span className="text-blue-600">Cars Palace</span>, we're always eager to assist you. Whether you're interested in our cars, require aftersales support, or just have a general inquiry, don't hesitate to reach out.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <p className="leading-relaxed">123 Auto Lane, Motor City, 12345</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <p className="leading-relaxed">(123) 456-7890</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <p className="leading-relaxed">support@carspalace.com</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
                <p className="leading-relaxed">Mon - Fri: 9am - 7pm</p>
                <p className="leading-relaxed">Sat: 10am - 5pm</p>
                <p className="leading-relaxed">Sun: Closed</p>
            </div>
        </section>
        </div>
        </>
    );
};

export default Contact;
