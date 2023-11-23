import SectionHeaders from "../layout/SectionsHeaders";

export default function AboutUs() {
    return(
        <>
        <section className='text-center my-16'>
        <SectionHeaders subHeader={'Out Story'} mainHeader={'About Us'}/>
        <div className="grid grid-cols-2 gap-2 text-center my-3">
            <img src="/main-pizza.png" alt="pizza" />
            <p className="max-w-2xl mx-auto my-auto text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec accumsan justo.
            Sed ultrices, nulla in accumsan laoreet, ante ipsum facilisis velit, vel mattis nibh
            urna ac ligula. Nulla elit elit, mollis ut iaculis quis, facilisis eu ante. Integer et
            scelerisque metus, quis ullamcorper justo. Mauris porttitor vel mi a ornare. In hendrerit
            ut nisi non placerat. Curabitur at leo posuere nisl dignissim mattis. Mauris venenatis lacus
            eget urna vulputate, id eleifend sem elementum.
            </p>
        </div>
        </section>   
        </>
    );
}