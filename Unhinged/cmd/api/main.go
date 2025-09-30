package main

import (
	"fmt"

	"github.com/alterartichoke/myproject/config"
	"github.com/alterartichoke/myproject/db"
	"github.com/alterartichoke/myproject/handlers"
	"github.com/alterartichoke/myproject/middlewares"
	"github.com/alterartichoke/myproject/repositories"
	"github.com/alterartichoke/myproject/services"
	"github.com/gofiber/fiber/v2"
)

func main(){
	envConfig := config.NewEnvConfig()
	dbase := db.Init(envConfig, db.DBMigrator)

	app := fiber.New(fiber.Config{
		AppName: "TicketBooking",
		ServerHeader: "Fiber",
	})

	//Repositories
	eventRepository := repositories.NewEventRepository(dbase)
	ticketRepository := repositories.NewTicketRepository(dbase)
	authRepository := repositories.NewAuthRepository(dbase)

	//Services
	authService := services.NewAuthService(authRepository)

	//Routing
	server := app.Group("/api")
	handlers.NewAuthHandler(server.Group("/auth"), authService)

	privateRoutes := server.Use(middlewares.AuthProtected(dbase))

	//Handlers
	handlers.NewEventHandler(privateRoutes.Group("/event"), eventRepository)
	handlers.NewTicketHandler(privateRoutes.Group("/ticket"), ticketRepository)

	app.Listen(fmt.Sprintf("0.0.0.0:%s", envConfig.ServerPort))
}