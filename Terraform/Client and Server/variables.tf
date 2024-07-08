variable "mandatory_tags" {
  type = map(string)
  default = {
    owner         = "duncanb@bbd.co.za"
    created-using = "terraform"
  }
}

variable "account_number" {
  type        = string
  description = "The account number for the AWS account."
}

variable "repo" {
  type        = string
  description = "The repository name."
}

variable "region" {
  type        = string
  description = "The region where the resources will be deployed."
  default     = "eu-west-1"
}

variable "project_name" {
  type        = string
  description = "The name of the project."
  default     = "my-project"
}

variable "cidr_block" {
  type        = string
  description = "The CIDR block for the VPC."
  default     = "15.0.0.0/16"
}

variable "vpc_public_subnets" {
  type        = list(object({ cidr_block = string, az = string }))
  description = "The public subnets for the VPC."
  default = [{
    cidr_block = "15.0.1.0/24"
    az         = "eu-west-1a"
    },
    {
      cidr_block = "15.0.3.0/24"
      az         = "eu-west-1b"
  }]
}

variable "vpc_private_subnets" {
  type        = list(object({ cidr_block = string, az = string }))
  description = "The private subnets for the VPC."
  default = [{
    cidr_block = "15.0.5.0/24"
    az         = "eu-west-1a"
    },
    {
      cidr_block = "15.0.7.0/24"
      az         = "eu-west-1b"
  }]
}

variable "db_port" {
  type        = number
  description = "The port for the database."
  default     = 1433
}

variable "eb_port_web" {
  type        = number
  description = "The port for the eb frontend."
  default     = 80
}

variable "backend_certificate" {
  type        = string
  description = "The number for the Backend SSL certificate."
}

variable "frontend_certificate" {
  type        = string
  description = "The number for the Frontend SSL certificate."
}

variable "instance_ids" {
  type    = list(string)
  default = ["i-004665530f87ed207", "i-0abff3eeeae5bdbb4"]  # Replace with your actual EC2 instance IDs
}
