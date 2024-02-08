<template>
    <div class="col-12 col-md-10">
        <div class="resume-wrap">
            <section class="row justify-content-around">
                <div class="col-12 col-md-3">
                    <div class="mb-5">
                        <h1>Levi Tyler</h1>
                        <h5>Full-Stack Developer</h5>
                    </div>
                    <div class="px-2">
                        <h3 class="border-cus">Education</h3>
                        <h5>Certificate Awarded: Full Stack Development</h5>
                        <p class="px-3">
                            CodeWorks, September 2023 - December 2023 ||
                            Boise, ID
                        </p>
                        <h5>Boise State University</h5>
                        <p class="px-3">
                            Attended 2 Semesters for Graphic Design, 2022 - 2023
                        </p>
                    </div>
                    <div class="px-2">
                        <h3 class="border-cus">Skills</h3>
                        <ul>
                            <li>JavaScript (Node.js)</li>
                            <li>HTML/CSS</li>
                            <li>Vue</li>
                            <li>C#</li>
                            <li>Postman</li>
                            <li>mySQL</li>
                            <li>Bootstrap</li>
                            <li>MongoDB</li>
                            <li>Ionic Framework</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <h3 class="text-center border-cus">Work Experience</h3>
                    <div>
                        <h5>Shift-Lead || In-Store Employee</h5>
                        <p class="mb-0">Blimpie - Moxie Java | 1122 S Vista Ave | Boise, ID</p>
                        <p>October 2022 - September 2023</p>
                        <ul>
                            <li>After 6 months I was promoted to shift-lead, after which I regularly lead closing shifts and
                                would be tasked with opening the store most weekdays</li>
                            <li>My responsibilities consisted of baking bread and ensuring its quality.</li>
                            <li>Ensuring team members were focused and on task.</li>
                            <li>Ensuring quality customer service and exceptional wait times, especially for drive-through
                                customers</li>
                        </ul>
                    </div>
                    <div>
                        <h5>In-Store Employee</h5>
                        <p class="mb-0">Jimmy Johns | 2959 N Eagle Rd | Meridian, ID</p>
                        <p>May 2022 - August 2022</p>
                        <ul>
                            <li>Worked all positions in-store; drive-through, line, and slicer</li>
                            <li>Worked quick and efficiently to ensure sub five minute wait times for drive-through
                                customers.</li>
                            <li>Tasked with closing the store and following all closing procedures.</li>
                        </ul>
                    </div>
                    <h3 class="text-center border-cus">Projects</h3>
                    <section class="row">
                        <div class="col-12 col-md-6">
                            <h5 class="text-center">Keepr</h5>
                            <ul>
                                <li>Made use of C# for the back-end for API calls to a mySQL database.</li>
                                <li>Vue with JavaScript for the front-end.</li>
                                <li>Tasked with creating two separate objects in a database and having a way to link them
                                    together to display for users.</li>
                                <li>Insured with webpage met lighthouse accessability standards, as well as being secure and
                                    performant.</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6">
                            <h5 class="text-center">BCW Capstone</h5>
                            <ul>
                                <li>In a team of four developers from our cohort I created a UML, product pitch, back-end,
                                    and help finalize front-end features.</li>
                                <li>Utilized Express.js for the back-end as well as Mongoose and with MongoDB for our
                                    database.</li>
                                <li>For images uploaded to the site, we utilized Supabase, which allowed us to easily store
                                    and display user images for our webpage.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.resume-wrap {
    padding: 1rem;
    background-color: var(--darkest-green);
    color: var(--main-bg);
    border-radius: 3.5px;
    box-shadow: 4px 4px 8px 4px rgb(184, 184, 184);
}

.border-cus {
    border-bottom: 2px solid var(--main-bg);
    padding-bottom: 0.25rem;
}
</style>