import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema, type InsertContact, type Contact } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // TODO: Send email notification
      console.log('New contact submission:', contact);
      
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error('Get contacts error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  // Newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = z.object({ email: z.string().email() }).parse(req.body);
      
      // TODO: Add to newsletter service
      console.log('Newsletter signup:', email);
      
      res.json({ success: true, message: "Successfully subscribed to newsletter" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email address" 
        });
      } else {
        console.error('Newsletter signup error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to subscribe to newsletter" 
        });
      }
    }
  });

  // Analytics tracking endpoint
  app.post("/api/analytics", async (req, res) => {
    try {
      const { event, properties } = z.object({
        event: z.string(),
        properties: z.object({}).passthrough().optional(),
      }).parse(req.body);
      
      // TODO: Send to analytics service
      console.log('Analytics event:', event, properties);
      
      res.json({ success: true });
    } catch (error) {
      console.error('Analytics error:', error);
      res.status(200).json({ success: false }); // Don't fail on analytics errors
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
