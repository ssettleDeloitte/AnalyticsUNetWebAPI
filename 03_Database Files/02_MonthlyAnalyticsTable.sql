USE [analyticsudb]
GO

/****** Object:  Table [dbo].[MonthlyAnalytics]    Script Date: 10/20/2023 10:50:45 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[MonthlyAnalytics](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[MonthText] [nvarchar](20) NOT NULL,
	[MonthSum] [int] NOT NULL,
	[MonthYear] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


