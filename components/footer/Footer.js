import SectionHeaders from "../layout/SectionsHeaders";

export default function Footer() {
    return (
      <>
        <div className="text-center my-6">
          <SectionHeaders
            subHeader={"Don't hesitate"}
            mainHeader={"Contact us"}
          />
        </div>
        <footer className="bg-primary text-white p-8 mt-10">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 underline">Follow us!</h2>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 underline">Contact</h2>
              <a href="tel:123-456-7890">P: 123-456-7890</a>
              <p>E: sample@mail.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 underline">Newsletter</h2>
            </div>
          </div>
          <div className="mt-4 text-center mt-12">
            &copy; All rights reserved.
          </div>
        </footer>
      </>
    );
}