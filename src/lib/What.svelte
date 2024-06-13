<script>
    import Button from "$lib/button.svelte";
    import Contact from "./contact.svelte";
  </script>
  
  <div class="container grid">
    <div class="what">
      <h3>What We Do?</h3>
      <p>
        We are committed to providing a world-class education that empowers young minds to achieve their full potential. Our experienced and dedicated teachers work closely with students to identify their strengths and weaknesses, developing personalized learning plans that cater to their unique needs. We offer a range of extracurricular activities and programs that promote creativity, critical thinking, and problem-solving skills, from sports to arts and music.
      </p>
      <p>
       We believe that education is not just about academics, but also about building character, developing emotional intelligence, and cultivating a sense of social responsibility. We strive to create a community that values diversity, inclusivity, and respect for all individuals, and we encourage our students to become active participants in shaping their own learning journey. By providing a supportive and stimulating environment, we aim to inspire our students to become confident, creative, and compassionate individuals who are equipped to make a positive impact in the world.
      </p>
  
      <button class="secondary" id="a-button" >Call To Action >> </button> 
    </div>
    <contact />
  </div>
  
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 2em;
    }
    .what {
      grid-column: span 8;
    }
  
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 2em;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }
  
  </style>