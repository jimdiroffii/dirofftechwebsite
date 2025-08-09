provider "aws" {
	region = var.aws_region
}

locals {
	project_name = "contact-form-stack"
	environment = "dev"

	common_tags = {
		Project = local.project_name
		Environment = local.environment
		ManagedBy = "terraform"
		Owner = "DiroffTech"
	}
}







