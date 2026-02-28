import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, kakaoId, company, message } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ error: "이름, 연락처, 이메일은 필수입니다." });
    }

    // Configure transporter (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        // Remove spaces from app password if present
        pass: process.env.EMAIL_PASS?.replace(/\s/g, ""),
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "jjangaya33@gmail.com",
      subject: `[상담 신청] ${name} (${company || "회사명 없음"})`,
      text: `
        신규 상담 신청이 접수되었습니다.

        이름: ${name}
        연락처: ${phone}
        이메일: ${email}
        카카오톡 ID: ${kakaoId || "미입력"}
        회사명: ${company || "미입력"}
        문의내용: ${message || "미입력"}
      `,
    };

    try {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("EMAIL_USER or EMAIL_PASS is not set. Email not sent.");
        return res.status(200).json({ 
          success: true, 
          message: "상담 신청이 접수되었습니다. (단, 이메일 발송을 위한 환경 변수가 설정되지 않았습니다.)" 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "상담 신청이 이메일로 발송되었습니다." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "이메일 발송 중 오류가 발생했습니다." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
