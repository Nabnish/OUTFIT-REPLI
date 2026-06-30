import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { Data } from "../data/data";

type ProductProps = {
  theme: string;
};

export default function Product({ theme }: ProductProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Data.find((p) => p.id === id);

  const isDark = theme === "#000000";
  const isRed = theme === "#FF0000";
  const textColor = isDark ? "text-[#ECE9E4]" : isRed ? "text-[#FF0000]" : "text-[#000000]";
  const bgColor = isDark ? "bg-[#000000]" : "bg-[#ECE9E4]";
  const borderColor = isDark ? "border-[#ECE9E4]/20" : isRed ? "border-[#FF0000]/20" : "border-[#000000]/20";

  if (!product) {
    return (
      <div className={`min-h-screen w-full ${bgColor} ${textColor} px-6 py-20`}>
        <div className="mx-auto max-w-5xl">Product not found</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full ${bgColor} ${textColor}`}>
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12 lg:py-8">
        <div className="mb-8 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.35em] opacity-80">
          <button
            onClick={() => navigate("/")}
            className={`transition-opacity hover:opacity-100 ${textColor}`}
          >
            ← Return to shop
          </button>
          <span>01</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
              <img
                src={product.images[1]}
                alt={`${product.name} detail`}
                className="h-full w-full object-cover"
              />
              <div className={`flex min-h-[220px] flex-col justify-between border ${borderColor} p-6`}>
                <div className="space-y-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] opacity-70">Featured</p>
                  <p className="text-2xl leading-tight sm:text-3xl">
                    Made to be worn.
                    <br />
                    Or judged. Or both.
                  </p>
                </div>
                <p className="text-sm leading-7 opacity-70">
                  A quietly bold piece designed for everyday motion and a little bit of attitude.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="flex flex-col justify-between pt-2 lg:pt-8"
          >
            <div className="space-y-7">
              <div className="space-y-3">
                <p className="text-[0.7rem] uppercase tracking-[0.35em] opacity-70">Product</p>
                <h1 className="text-4xl font-semibold leading-none sm:text-5xl lg:text-6xl">
                  {product.name}
                </h1>
              </div>

              <p className="text-3xl font-medium sm:text-4xl">{product.price}</p>

              <p className="max-w-xl text-base leading-8 opacity-80">
                {product.description}
              </p>

              <div className={`space-y-4 border-y ${borderColor} py-6`}>
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.35em] opacity-80">
                  <span>Color</span>
                  <span>Black</span>
                </div>
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.35em] opacity-80">
                  <span>Size</span>
                  <span>ML XL 2X</span>
                </div>
              </div>

              <button
                className={`inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm uppercase tracking-[0.28em] transition ${isDark ? "border-[#ECE9E4] bg-[#ECE9E4] text-[#000000] hover:bg-transparent hover:text-[#ECE9E4]" : isRed ? "border-[#FF0000] bg-[#FF0000] text-[#ECE9E4] hover:bg-transparent hover:text-[#FF0000]" : "border-[#000000] bg-[#000000] text-[#ECE9E4] hover:bg-transparent hover:text-[#000000]"}`}
              >
                Add to bag
              </button>
            </div>

            <div className={`mt-12 border-t ${borderColor} pt-6 text-sm leading-8 opacity-70`}>
              <p>©26</p>
              <p>Made to be worn.</p>
              <p>Or judged. Or both.</p>
            </div>
          </motion.div>
        </div>

        <footer className={`mt-16 border-t ${borderColor} pt-6 text-[0.7rem] uppercase tracking-[0.3em] opacity-80`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>Created by the ++hellohello team</span>
            <div className="flex flex-wrap gap-4">
              <span>Privacy</span>
              <span>Instagram</span>
              <span>Dribbble</span>
              <span>Work</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}