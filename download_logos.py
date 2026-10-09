import os
import requests

public_skills_dir = r"c:\Users\Engnr.Tufail Sangras\Desktop\Portfolio-website\public\skills"
os.makedirs(public_skills_dir, exist_ok=True)

# Format: (skill_name, url, filename)
skills = [
    ("Java", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", "java.svg"),
    ("Spring Boot", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", "spring-boot.svg"),
    ("Hibernate", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg", "hibernate.svg"),
    ("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", "python.svg"),
    ("FastAPI", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", "fastapi.svg"),
    ("C#", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", "csharp.svg"),
    ("ASP.NET", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", "asp-net.svg"),
    ("Scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", "scikit-learn.svg"),
    ("TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", "tensorflow.svg"),
    ("PyTorch", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", "pytorch.svg"),
    ("Keras", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", "keras.svg"),
    ("n8n", "https://cdn.simpleicons.org/n8n/EA4B71", "n8n.svg"),
    ("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", "postgresql.svg"),
    ("MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", "mongodb.svg"),
    ("GraphQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", "graphql.svg"),
    ("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "git.svg"),
    ("Redis", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", "redis.svg"),
    ("BullMQ", "https://cdn.simpleicons.org/bullmq/E0234E", "bullmq.svg"),
    ("Pinecone", "https://cdn.simpleicons.org/pinecone/000000", "pinecone.svg"),
    ("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", "docker.svg")
]

for name, url, filename in skills:
    print(f"Downloading {name}...")
    try:
        response = requests.get(url, allow_redirects=True, timeout=10)
        response.raise_for_status()
        filepath = os.path.join(public_skills_dir, filename)
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"Saved to {filename}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
