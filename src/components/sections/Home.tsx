import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/data";
import Icon from "@/components/ui/Icon";
import GithubLink from "@/components/ui/GithubLink";

const CODE_WATERMARK = `def train_model(data, epochs=10):
    model = NeuralNet(layers=[128, 64, 32])
    optimizer = Adam(lr=1e-3)
    for epoch in range(epochs):
        loss = model.fit(data, optimizer)
        print(f"epoch {epoch}: loss={loss:.4f}")
    return model.predict(data)

class NeuralNet(torch.nn.Module):
    def __init__(self, layers):
        super().__init__()
        self.net = torch.nn.Sequential(*[
            torch.nn.Linear(layers[i], layers[i+1])
            for i in range(len(layers)-1)
        ])
    def forward(self, x): return self.net(x)`;

export default function Home() {
  return (
    <section
      id="home"
      className="home-bg relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background pt-[68px]"
    >
      {}
      <pre
        aria-hidden
        className="hero-watermark hidden md:block md:right-[-2rem] md:top-[68px] md:bottom-0 md:w-[55%] lg:w-[45%]"
      >
        {CODE_WATERMARK}
      </pre>
      {}
      <div className="hero-watermark md:hidden" />

      <div className="relative z-10 container-x py-16 max-w-3xl">
        <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-extrabold tracking-tight leading-[1.05] text-foreground mb-3">
          {personalInfo.name}
        </h1>

        <h2 className="text-[clamp(1.4rem,3.5vw,2.4rem)] font-bold text-muted mb-5">
          {personalInfo.title}
        </h2>

        <p className="text-[1rem] md:text-[1.1rem] text-muted max-w-[42rem] mx-auto mb-10 leading-relaxed">
          {personalInfo.subtitle}
        </p>

        {}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Icon name="file" size={18} />
            Resume
          </a>
        </div>

        {}
        <div className="flex items-center justify-center gap-5 mb-10">
          <GithubLink url={personalInfo.github} size={26} />
          <Icon name="linkedin" url={personalInfo.linkedin} size={26} />
        </div>

        {}
        <a
          href="#about"
          aria-label="Scroll to about"
          className="inline-flex text-muted hover:text-foreground transition-colors"
        >
          <ChevronDown size={28} className="bounce-down" />
        </a>
      </div>
    </section>
  );
}